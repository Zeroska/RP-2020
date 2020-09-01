export interface SubQuestion {
    // is [ isMultipleChoice |  isInput ] choice render type
    statment: string,
    isMultipleChoice: boolean, 
    choices?: Array<MultipleChoice> // Optional
    isInput: boolean,
    inputQuestion: string,
    correctAnswer:string,
    wordSuggestion?: Array<String>
}

export interface MultipleChoice {
    content: string,
    isCorrect: boolean,
    response: string
}