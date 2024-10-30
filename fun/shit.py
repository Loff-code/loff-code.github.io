import time
import os

# Initialize the grid
grid = [[0 for _ in range(9)] for _ in range(9)]

# Initialize the fixed grid to track which cells are fixed
fixed = [[False for _ in range(9)] for _ in range(9)]

# Set the fixed cells (true for preset values)
preset_positions = [
    (0, 0),
    (0, 1),
    (0, 4),
    (1, 0),
    (1, 3),
    (1, 4),
    (1, 5),
    (2, 1),
    (2, 2),
    (2, 7),
    (3, 0),
    (3, 4),
    (3, 8),
    (4, 0),
    (4, 3),
    (4, 5),
    (4, 8),
    (5, 0),
    (5, 4),
    (5, 8),
    (6, 1),
    (6, 6),
    (6, 7),
    (7, 3),
    (7, 4),
    (7, 5),
    (7, 8),
    (8, 4),
    (8, 7),
    (8, 8),
]

# Mark these positions as fixed in the fixed grid
for i, j in preset_positions:
    fixed[i][j] = True

# Preset values for the corresponding positions
preset_values = [
    5,
    3,
    7,
    6,
    1,
    9,
    5,
    9,
    8,
    6,
    8,
    6,
    3,
    4,
    8,
    3,
    1,
    7,
    2,
    6,
    6,
    2,
    8,
    4,
    1,
    9,
    5,
    8,
    7,
    9,
]

# Fill the grid with preset values
for index, (i, j) in enumerate(preset_positions):
    grid[i][j] = preset_values[index]


# Function to print the grid
def printGrid():
    # Clear the screen
    os.system("cls" if os.name == "nt" else "clear")

    # Print the grid
    for row in grid:
        for val in row:
            print(f"{val if val > 0 else ' '}", end=" ")
        print()
    print()  # Extra line for readability


# Function to check if placing number 'num' at (row, col) is valid
def isValid(num, row, col):
    # Check row
    if num in grid[row]:
        return False

    # Check column
    if num in [grid[i][col] for i in range(9)]:
        return False

    # Check 3x3 block
    block_row = row // 3 * 3
    block_col = col // 3 * 3
    for i in range(block_row, block_row + 3):
        for j in range(block_col, block_col + 3):
            if grid[i][j] == num:
                return False

    return True


# Function to find the next empty cell
def findEmptyCell():
    for i in range(9):
        for j in range(9):
            if grid[i][j] == 0 and not fixed[i][j]:
                return i, j
    return None  # If no empty cell is found


# Backtracking solver function with print and delay
def solve():
    empty = findEmptyCell()
    if not empty:
        return True  # Solved (no empty cell means grid is complete)

    row, col = empty

    # Try numbers from 1 to 9
    for num in range(1, 10):
        if isValid(num, row, col):
            grid[row][col] = num  # Place the number

            # Print the current grid and the number tried
            print(f"Trying {num} at ({row}, {col})")
            printGrid()
            time.sleep(0.1)  # Add a delay of 0.1 seconds

            # Recursively solve for the next empty cell
            if solve():
                return True

            grid[row][col] = 0  # Backtrack and reset

            # Print the backtracking step
            print(f"Backtracking from ({row}, {col})")
            printGrid()
            # time.sleep(0.05)  # Add a delay of 0.1 seconds

    return False  # No valid number was found, backtrack


# Start solving
if solve():
    print("Sudoku solved successfully:")
else:
    print("No solution exists")

printGrid()
