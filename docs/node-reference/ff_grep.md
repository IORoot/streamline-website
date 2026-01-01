---
sidebar_position: 35
title: File Filter
description: Filter files from a folder using regular expression patterns
---

# File Filter Node

<img src="/img/node-icons/grep.svg" alt="ff_grep Icon" className="node-icon" />

![File Filter Node](/img/node-screenshots/ff_grep.png)

The **File Filter** node filters files from a folder using regular expression patterns, allowing you to process only specific file types or patterns.

## Overview

The File Filter node uses regular expressions to match and filter files from a folder input. It includes preset buttons for common file type patterns.

## Inputs

### Required Inputs

- **input** (`folder`): Input folder from a Folder Input node

### Optional Inputs

- **grep** (`textarea`): Regular expression pattern
  - Examples: `.*\.mp4$` for MP4 files
  - Default: `.*` (all files)
  - Preset buttons: All Files, MP4 Files, Video Files, Image Files

- **notes** (`textarea`): Optional notes

## Outputs

- **output** (`file`): Filtered files (dynamic output for multiple matches)

## Usage Summary

File Filter uses regex patterns to select files from a folder. Connect to a Folder Input node, then use regex patterns to filter specific file types. Preset buttons provide common patterns for quick filtering.
