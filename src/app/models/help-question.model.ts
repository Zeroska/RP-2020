import {SubQuestion} from './help-sub-question.models'
export interface HelpQuestion{

    // TODO implent like type help-me to show the following subquestiong
    name: string,
    openQuestion: string,
    subquestion:Array<SubQuestion>,
    endPhaseQuotes: string
}