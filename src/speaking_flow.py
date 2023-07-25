import openai_node as openai
import elevenlabs_node as elevenlabs
import twilio_node as twilio


def speaking_flow(prank_target):
    # Generate message using OpenAI GPT
    message = openai.generateMessage()

    # Synthesize voice using ElevenLabs
    voice = elevenlabs.synthesizeVoice(message)

    # Transmit call using Twilio
    twilio.transmitCall(prank_target, voice)
