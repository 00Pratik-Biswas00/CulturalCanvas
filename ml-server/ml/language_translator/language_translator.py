from deep_translator import GoogleTranslator

from .utils import LANGUAGES

# Translate the given text into the specified language.
def translate_text(text, language):
    if not text or not language:
        return None, "Missing text or language"

    code = LANGUAGES.get(language)
    if not code:
        return None, "Unsupported language"

    try:
        translated_text = GoogleTranslator(source="auto", target=code).translate(text)
        return translated_text, None
    except Exception as e:
        return None, str(e)