---
sidebar_position: 1
title: Architecture Overview
description: Learn about Streamline's architecture, technology stack, and component structure
---

# Architecture Overview

Streamline is built on a modern, modular architecture that separates concerns and provides extensibility.

## Technology Stack

### Frontend

- **React**: UI framework for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **Rete.js**: Node-based visual editor framework
- **Electron**: Cross-platform desktop application framework

### Backend/Processing

- **FFMPEG**: Video and audio processing engine
- **Node.js**: Runtime for MCP server and utilities
- **Chrome DevTools Protocol**: For MCP server communication

## Application Structure

### Core Components

```
src/
├── components/          # React UI components
├── lib/                # Core libraries and utilities
├── nodes/              # Node plugin definitions
├── services/           # Application services
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

### Component Architecture

#### Main Application (`App.tsx`)

- **Purpose**: Root component managing overall application state
- **Responsibilities**:
  - Application initialization
  - Service setup and coordination
  - Keyboard shortcuts
  - Drag and drop handling
  - Electron API integration

#### Node Editor (`ReteSimpleEditor.tsx`)

- **Purpose**: Visual node editor using Rete.js
- **Responsibilities**:
  - Node rendering and interaction
  - Connection management
  - Canvas operations (zoom, pan)
  - Layout management
  - Comment system

#### Settings Modal (`ModalSettings.tsx`)

- **Purpose**: Application settings interface
- **Responsibilities**:
  - Settings display and editing
  - Theme customization
  - Configuration management
  - Service integration

#### Preview Modal (`ModalPreviewImage.tsx`)

- **Purpose**: Preview and analysis interface
- **Responsibilities**:
  - Image/video preview display
  - Audio waveform visualization
  - Video/audio monitors
  - Zoom and pan controls

## Service Architecture

### Data Store Service

- **Purpose**: Centralized key-value store for dynamic data
- **Features**:
  - Template variable storage
  - File metadata management
  - System value access
  - Random value generation
  - Node parameter tracking
  - Custom user data

### Node Plugin System

- **Purpose**: Node definition and execution management
- **Features**:
  - Node registration and discovery
  - Filter graph generation
  - Parameter validation
  - Preview generation
  - Custom node support

### Pipeline Runner

- **Purpose**: Pipeline execution engine
- **Features**:
  - JSON to FFMPEG conversion
  - Execution management
  - Status tracking
  - Error handling
  - Log management

### Layout Service

- **Purpose**: Multi-tab and layout management
- **Features**:
  - Tab creation and management
  - Layout save/load
  - State persistence
  - Canvas state management

## Data Flow

### Pipeline Creation Flow

```
User Interaction
    ↓
Node Editor (Rete.js)
    ↓
Node Data Service
    ↓
JSON Exporter
    ↓
Pipeline Runner
    ↓
FFMPEG Execution
    ↓
Output Files
```

### Preview Generation Flow

```
Node Execution
    ↓
Preview Image Service
    ↓
Base64 Encoding
    ↓
Preview Modal Display
```

### Template Variable Flow

```
Node Parameters
    ↓
Template Variable Parser
    ↓
Data Store Service
    ↓
Variable Resolution
    ↓
FFMPEG Command Generation
```

## Extension Points

### Custom Nodes

- **Location**: Custom nodes directory (Settings → Plugins)
- **Interface**: Node plugin interface
- **Registration**: Automatic discovery and loading

### Themes

- **Location**: `./public/assets/themes/`
- **Format**: JSON theme files
- **Customization**: Full CSS variable control

### MCP Server

- **Purpose**: AI assistant integration
- **Protocol**: Chrome DevTools Protocol
- **Extension**: Custom commands and tools

## State Management

### Application State

- **React State**: Component-level state
- **Local Storage**: Persistent user preferences
- **Service State**: Centralized service state
- **Tab State**: Per-tab isolated state

### State Persistence

- **Layouts**: Saved to files
- **Settings**: Stored in local storage
- **Theme**: Stored in local storage
- **Tabs**: Persisted between sessions

## Communication Patterns

### Event-Driven Architecture

- **Custom Events**: DOM events for cross-component communication
- **Service Events**: Service-level event emitters
- **Electron IPC**: Main/renderer process communication

### Service Communication

- **Direct Calls**: Service method calls
- **Observers**: Status change listeners
- **Callbacks**: Async operation callbacks

## Performance Considerations

### Rendering Optimization

- **Virtual Scrolling**: For large node lists
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React memo for expensive components
- **Canvas Optimization**: Efficient Rete.js rendering

### Processing Optimization

- **Preview Caching**: Cached preview images
- **Waveform Caching**: Cached audio waveforms
- **Lazy Evaluation**: Parameters evaluated on demand
- **Batch Operations**: Grouped file operations

## Security Considerations

### File System Access

- **Sandboxed**: Electron renderer process sandboxing
- **Path Validation**: Input path validation
- **Permission Checks**: File permission verification

### License Validation

- **Server Validation**: License Mate API integration
- **Local Storage**: Encrypted license key storage
- **Version Checking**: Version compatibility validation

## Build and Distribution

### Development

- **Hot Reload**: React development server
- **TypeScript**: Type checking and compilation
- **Electron DevTools**: Development tools integration

### Production

- **Electron Builder**: Application packaging
- **Code Signing**: Platform-specific code signing
- **Auto Updater**: Update mechanism (if configured)

## Future Architecture Considerations

### Scalability

- **Plugin System**: Extensible node system
- **Service Architecture**: Modular service design
- **State Management**: Efficient state handling

### Maintainability

- **TypeScript**: Type safety
- **Modular Design**: Separation of concerns
- **Documentation**: Comprehensive code documentation
