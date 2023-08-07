def exercise_1_4():
    micropip.install("numpy")
    import numpy as np

    # Array storing the variables
    array = np.array([[2, 1, -1, 2, 5],
                [4, 5, -3, 6, 9],
                [-2, 5, -2, 6, 4],
                [4, 11, -4, 8, 2]])

    n = len(array)

    # Array storing the solutions
    solution = np.zeros(n)

    # Forward Elimination Step
    for i in range(n):
        for j in range(i+1, n):
            ratio = array[j][i]/array[i][i]
            
            for k in range(n+1):
                array[j][k] = array[j][k]-ratio*array[i][k]

    # Back Substitution Step
    solution[n-1] = array[n-1][n]/array[n-1][n-1]

    for i in range(n-2,-1,-1):
        solution[i] = array[i][n]

        for j in range(i+1,n):
            solution[i] = solution[i]-array[i][j]*solution[j]

        solution[i] = solution[i]/array[i][i]

    print("The augmented upper triangular matrix:\n", array)
    print("Numerical solutions:\n", solution)