---
sidebar_position: 56
title: Watch Folder
description: Monitor a folder for new files and automatically process them
---

# Watch Folder Node

<img src="/img/node-icons/watch.svg" alt="ff_watch Icon" className="node-icon" />

The **Watch Folder** node monitors a folder for new files and can automatically process them through the pipeline when detected.

## Overview

The Watch Folder node continuously monitors a specified folder for new files matching a pattern. When files are detected, they can be automatically processed through the connected pipeline.

## Inputs

### Required Inputs

- **folder** (`folder`): Folder to watch for new files

### Optional Inputs

- **autoprocess** (`boolean`): Automatically process new files when detected
  - When enabled, files are processed automatically
  - When disabled, files are only detected
  - Default: `false`

- **pollinterval** (`number`): How often to check for new files
  - Range: 1000 - 2592000000 milliseconds
  - Default: `5000` (5 seconds)

- **pattern** (`textarea`): Regular expression to filter files
  - Default excludes result files to prevent processing loops
  - Default: `^(?!\d+_|ff_|.*\.(processed|output|result|temp|tmp|blurred|edited|final)).*$`
  - Preset buttons: All Files, MP4 Files, Video Files, Image Files, Exclude Results

- **notes** (`textarea`): Optional notes

## Outputs

- **output** (`file`): Detected files (dynamic output)

## Usage Summary

Watch Folder monitors a folder for new files matching a pattern. Use autoprocess to automatically run the pipeline on detected files. Set pollinterval to control check frequency. Use pattern to filter file types and prevent processing loops (exclude result files).
