---
sidebar_position: 3
title: Feedback
description: How to submit feedback about the application
---

# Feedback System

The Feedback system allows you to submit feedback, bug reports, feature requests, and suggestions directly from the application.

## Overview

The Feedback modal provides an interface for submitting user feedback to a configured webhook endpoint. Feedback is sent securely with authentication and includes application context.

## Accessing Feedback

### Methods

1. **Menu**: File → Feedback
2. **Keyboard Shortcut**: Check keyboard shortcuts in Settings
3. **Toolbar**: Feedback button (if available)

## Submitting Feedback

### Feedback Form

1. **Open Feedback Modal**: Use one of the access methods above
2. **Enter Feedback**: Type your feedback, bug report, or feature request
3. **Submit**: Click the submit button
4. **Confirmation**: You'll receive confirmation when feedback is sent

### Feedback Types

- **Bug Reports**: Report issues or errors
- **Feature Requests**: Suggest new features
- **Improvements**: Suggest enhancements
- **General Feedback**: Share your thoughts

## Feedback Configuration

Feedback is configured via `package.json`:

- **Webhook URL**: Endpoint for receiving feedback
- **API Key**: Authentication key (optional)

### Supported Endpoints

- **Make.com**: Webhook endpoints
- **Discord**: Discord webhooks
- **Slack**: Slack webhooks
- **Custom APIs**: Any webhook-compatible endpoint

## Privacy

- Feedback is sent to the configured webhook
- No personal information is automatically included
- Application version may be included for context
- Feedback content is user-provided

## Troubleshooting

### Feedback Not Sending

- Check webhook URL configuration
- Verify API key (if required)
- Check network connection
- Review error messages in console

### Configuration Issues

- Webhook URL must be valid
- API key format must match endpoint requirements
- Endpoint must accept POST requests with JSON

## Notes

- Feedback is sent asynchronously
- No local storage of feedback
- ESC key closes the feedback modal
- Feedback requires webhook configuration to function
