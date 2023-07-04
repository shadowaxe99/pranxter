```python
class PranXterMiroBoard:
    def __init__(self):
        self.board = []

    def add_task(self, task):
        self.board.append(task)

    def remove_task(self, task):
        if task in self.board:
            self.board.remove(task)

    def get_tasks(self):
        return self.board

    def clear_board(self):
        self.board = []
```