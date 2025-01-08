I'll rewrite this bug report in a clearer, more structured format:

# Expo Router Navigation Bug Report

## Issue Summary

Navigation between screens becomes unresponsive after a single round-trip navigation, though native navigation gestures
remain functional.

## Environment

- Project Type: New Expo application
- Setup Method: Created via `pnpm dlx create-expo-app@latest`
- Project Name: expo-router-navigate-bug

## Setup Steps

1. Created new Expo project
2. Modified `package.json` to include development build configuration
3. Created three route files:
    - `index.tsx`
    - `a.tsx`
    - `b.tsx`
4. Implemented navigation between these screens

## Steps to Reproduce

1. Execute `pnpm ios` in the project root
2. Launch the application on an iOS device
3. Navigate between screens using the provided navigation buttons repeatedly

## Expected Behavior

- Users should be able to navigate indefinitely between screens using the in-app navigation buttons

## Actual Behavior

- After one complete navigation cycle:
    - All touch interactions on the screen become unresponsive
    - This includes buttons and scroll views
    - Native navigation methods still work (iOS back gesture, system back button)

## Additional Notes

- The issue consistently occurs after the first round-trip navigation
- Native navigation gestures remain functional despite the touch interaction bug
- Refer to "/recording.mov" for a visual demonstration of the issue