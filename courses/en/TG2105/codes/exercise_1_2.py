# This is not a standar python code used only for fetching result to JavaScript and ran through PyScript
# Array storing the variables
array = [[[2, 8, -2, -2], 
        [2, 10, 4, 4],
        [2, 12, 2, 6]]]

n = len(array)

# Array storing the solutions
solution = [0 for i in range(n)]

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

display('The augmented upper triangular matrix:', target="exercise_1_2_solution")
display(array, target="exercise_1_2_solution")
display('Numerical solutions:', target="exercise_1_2_solution")
display(solution, target="exercise_1_2_solution")