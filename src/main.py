import sys
sys.path.append('./pranxter_tasks')
sys.path.append('./pranxter_miro_board')
sys.path.append('./speaking_flow')
sys.path.append('./responding_flow')

from pranxter_tasks import PranXterTasks
from pranxter_miro_board import PranXterMiroBoard
from speaking_flow import SpeakingFlow
from responding_flow import RespondingFlow


def main():
    # Initialize modules
    tasks = PranXterTasks()
    miro_board = PranXterMiroBoard()
    speaking_flow = SpeakingFlow()
    responding_flow = RespondingFlow()

    # Get the prank task from the Miro Board
    prank_task = miro_board.get_prank_task()

    # Generate the prank message using OpenAI
    prank_message = tasks.generate_prank_message(prank_task)

    # Synthesize the prank message into voice
    synthesized_voice = speaking_flow.synthesize_voice(prank_message)

    # Make the prank call
    speaking_flow.transmit_call(synthesized_voice)

    # Wait for the response
    response = responding_flow.wait_for_response()

    # Recognize the voice in the response
    recognized_text = responding_flow.recognize_voice(response)

    # Generate a response message
    response_message = tasks.generate_response_message(recognized_text)

    # Synthesize the response message into voice
    synthesized_response = speaking_flow.synthesize_voice(response_message)

    # Respond to the call
    speaking_flow.transmit_call(synthesized_response)


if __name__ == "__main__":
    main()
