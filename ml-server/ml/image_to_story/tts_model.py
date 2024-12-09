from gtts import gTTS
import io

# Convert text to speech and return as a BytesIO object.
def text_to_audio(text):
    tts = gTTS(text, lang="en")
    audio_buffer = io.BytesIO()
    tts.write_to_fp(audio_buffer)
    audio_buffer.seek(0)
    return audio_buffer
