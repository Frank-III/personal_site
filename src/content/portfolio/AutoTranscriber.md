---
title: AutoTranscriber
description: Auto-Substitute Generator
started: 15-02-2023
projectLink: https://github.com/Frank-III/auto_transcriber
image: "header/autotranscriber.png"
language: Python
---

# AutoTranscriber 
repository: [AutoTranscriber](https://github.com/Frank-III/auto_transcriber)
Auto-Transcriber is an experimental, openai-powered translation tool, generating .srt file in one call!
<p align="center">
  <img src="/personal_site/images/content/20230330235522.png" width="80%" height="50%"/>
</p>

## Main Features
- powered by Openai `GPT3.5` or `GPT4` model, excellent context and results. 
- Audio to Text using [Fast-Whisper](https://github.com/guillaumekln/faster-whisper)(a faster implementation of Openai Whisper model), up to 4x faster.
- Minimum ussage of `Pandas`, using `Polars` for data processing and generating GPT requests.
- Ascychronize `ChatCompletionCall`, minimum latency.
- Build with Streamlit, with support to modify transcription results.

## How to start with?
```bash 
git clone //repo
pip install requirements.txt
streamlit run app.py
```

- Choose `From File` or `From Link` from sidebar
- Input `yt-link`(or video/audio file path), `saved folder path`
- Click `Generate`

