---
sidebar_position: 9
title: License
description: License validation system and License Mate API integration
---

# License Settings

The License system provides license validation using the License Mate API, allowing you to manage and validate application licenses.

## Overview

The License system uses License Mate API to validate license keys. It supports license activation, validation, and compatibility checking.

## License Mate API

### Configuration

License Mate API requires a client password for authentication:

#### Method 1: Environment Variable (Recommended)

Create a `.env` file in the project root:

```bash
LICENSE_CLIENT_PASSWORD=your-client-password-here
```

#### Method 2: React Environment Variable

For web builds:

```bash
REACT_APP_LICENSE_CLIENT_PASSWORD=your-client-password-here
```

#### Method 3: Programmatic Configuration

```typescript
licenseService.setClientPassword('your-client-password-here');
```

### Getting the Client Password

Contact your License Mate server administrator to obtain the client password.

## License Management

### Viewing License Status

1. Open Settings (File → Settings)
2. Navigate to "License" tab
3. View current license status and details

### License Information

- **Status**: Valid, Invalid, Expired, etc.
- **License Key**: Your license key
- **Expiration**: License expiration date (if applicable)
- **Features**: Enabled features based on license

### Activating a License

1. Enter your license key
2. Click "Activate" or "Validate"
3. System validates with License Mate API
4. License status is updated

## License Validation

### Validation Process

1. **Key Submission**: License key is submitted to License Mate API
2. **API Validation**: Server validates the key
3. **Compatibility Check**: License compatibility is verified
4. **Status Update**: License status is updated locally

### Validation Errors

- **401/403**: Incorrect client password or authentication failure
- **404**: License key doesn't exist (invalid key)
- **Network Errors**: Connection issues with License Mate server

## License Features

Licenses can enable/disable features:

- **Feature Flags**: Based on license type
- **Usage Limits**: Based on license tier
- **Expiration**: Time-limited licenses

## Troubleshooting

### License Not Validating

- Check client password configuration
- Verify License Mate server is accessible
- Check network connection
- Review error messages in logs

### Authentication Errors

- Verify client password is correct
- Check environment variable configuration
- Ensure `.env` file is in correct location

### Network Issues

- Check internet connection
- Verify License Mate server URL
- Check firewall settings
- Review API endpoint configuration

## Privacy and Security

- License keys are stored locally
- Validation requests are sent to License Mate server
- No personal information is transmitted
- Client password is required for API access

## Notes

- License validation requires internet connection
- License status is cached locally
- Validation occurs on application startup
- Manual validation available in Settings
