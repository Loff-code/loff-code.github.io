import cv2
import numpy as np
import joblib
import os

# Load pre-trained digit recognition model
model_path = "digit_classifier.pkl"
if os.path.exists(model_path):
    model = joblib.load(model_path)
else:
    print(
        f"Error: The model file '{model_path}' was not found. Please provide a valid model file."
    )
    model = None


# Sudoku solver function
def solve_sudoku(grid):
    def is_valid(num, row, col):
        for i in range(9):
            if grid[row][i] == num or grid[i][col] == num:
                return False
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(start_row, start_row + 3):
            for j in range(start_col, start_col + 3):
                if grid[i][j] == num:
                    return False
        return True

    def solve():
        for row in range(9):
            for col in range(9):
                if grid[row][col] == 0:
                    for num in range(1, 10):
                        if is_valid(num, row, col):
                            grid[row][col] = num
                            if solve():
                                return True
                            grid[row][col] = 0
                    return False
        return True

    return solve()


# Load the image
image_path = "sudoku.png"
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

# Pre-process the image
blur = cv2.GaussianBlur(image, (5, 5), 0)
thresh = cv2.adaptiveThreshold(blur, 255, 1, 1, 11, 2)
inverted_thresh = cv2.bitwise_not(thresh)

# Find contours
digits = []
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cell_size = image.shape[0] // 9
sudoku_grid = [[0 for _ in range(9)] for _ in range(9)]
for contour in contours:
    (x, y, w, h) = cv2.boundingRect(contour)
    if (
        20 < w < 50 and 20 < h < 50
    ):  # Filtering contours by size to detect individual cells
        digit_image = inverted_thresh[y : y + h, x : x + w]
        digit_image = cv2.resize(digit_image, (28, 28))
        digit_image = digit_image / 255.0  # Normalize the image
        digit_image = np.expand_dims(digit_image, axis=-1)
        digit_image = np.expand_dims(digit_image, axis=0)

        # Predict the digit using the pre-trained model
        if model is not None:
            prediction = model.predict(digit_image.reshape(1, -1))
            digit = int(prediction[0])
            row, col = y // cell_size, x // cell_size
            sudoku_grid[row][col] = digit
        else:
            # Fallback to manual input if model is not available
            print(
                f"Enter the digit for cell at row {y // cell_size + 1}, column {x // cell_size + 1}: "
            )
            digit = int(input())
            sudoku_grid[y // cell_size][x // cell_size] = digit

# Solve the Sudoku
if solve_sudoku(sudoku_grid):
    print("Sudoku solved successfully:")
    for row in sudoku_grid:
        print(row)
else:
    print("Failed to solve Sudoku.")
