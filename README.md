# DWAR MITRA - IGIMS Hospital Information Help Desk (Demo)

Bilingual (English / हिंदी) kiosk app for Indira Gandhi Institute of Medical Sciences (IGIMS), Patna.
Flow: Welcome -> Department selection -> Questions -> Answer (spoken with browser Text-to-Speech).

## Run
```
npm install
npm run dev
```
Build: `npm run build` (the output in `dist` also contains the bundled IGIMS logo).

## Tablet responsive update
- **Responsive layout** for 7" to 12"+ tablets (portrait and landscape): header, welcome screen, department cards, questions and answer screens now use fluid Tailwind layouts. Department grids pick their column count from the available width; long English/Hindi text wraps; content scrolls vertically instead of being clipped; no horizontal scroll.
- **Header**: below 1024px wide it uses two rows (logo + time/language, then DWAR MITRA) so nothing overlaps; from 1024px up it is one row. The IGIMS logo is larger and fluid (`h-auto`, original aspect ratio, asset untouched).
- **IGIMS pronunciation** (`src/utils/speech.js`): `prepareSpeechText()` rewrites "IGIMS" to "I. G. I. M. S." only for English speech. On-screen text, JSON and Hindi speech are unchanged. To try another spelling, edit `IGIMS_SPOKEN_EN` at the top of that file.

## What changed in the previous version (UI enhancement)
- **Header redesigned** (`src/components/Header.jsx`, shared by every screen) into three balanced areas: LEFT official IGIMS logo (unchanged asset, natural proportions), CENTER DWAR MITRA icon + title + subtitle, RIGHT time/date + English | हिंदी selector, separated by subtle dividers. On inner screens a slim strip under the header holds the Back button. Sizes scale down for 1024x768 and up for 1920x1080.
- **New welcome copy** (English and Hindi) for the heading, subheading, instruction, start button, department instruction and the spoken greeting. All of it lives in `src/data/uiText.json`.
- Welcome speech logic is unchanged (`speech.js`, `en-IN` / `hi-IN`, previous speech always cancelled, spoken once per screen open or language change, speaker button as autoplay fallback).
- Welcome-screen layout, mascot, green start button, department cards, questions, answers and JSON data are preserved.
- Hindi font stack now lists Devanagari-capable fonts (Noto Sans Devanagari, Nirmala UI, Kohinoor Devanagari, Mangal).

## Content (JSON only)
- `src/data/hospitalQuestions.json`: departments/questions/answers/floor/room (optional `building`), each as `{ "en": "...", "hi": "..." }`; plus `icon` and `color`.
- `src/data/uiText.json`: all screen texts, language list and `welcomeShortcutCount` (how many department shortcuts appear on the welcome screen).

IMPORTANT: the floors and room numbers in the JSON are sample/demo data. Replace them with locations verified by IGIMS before any real deployment.

## Voices
English uses `en-IN`, Hindi uses `hi-IN`. If the device has no matching voice it falls back to the device default. On Android tablets install Hindi voice data in Settings -> Text-to-speech output.
