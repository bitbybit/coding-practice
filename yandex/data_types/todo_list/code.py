# Comment it before submitting
# class Node:
#     def __init__(self, value, next_item=None):
#         self.value = value
#         self.next_item = next_item

import sys

sys.setrecursionlimit(5000)


def solution(node) -> None:
    if node.value is not None:
        print(node.value)

    if node.next_item is not None:
        solution(node.next_item)


def test():
    node3 = Node("node3", None)
    node2 = Node("node2", node3)
    node1 = Node("node1", node2)
    node0 = Node("node0", node1)
    solution(node0)
    # Output is:
    # node0
    # node1
    # node2
    # node3
