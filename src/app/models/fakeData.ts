import {HelpQuestion} from '../models/help-question.model'
let fakeHelper:HelpQuestion = {
    name: "string",
    openQuestion: "What do you think will happen when the box is dropped onto the conveyor belt ?",
    subquestion:[
       {
          statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
          isMultipleChoice: true,
          choices:[
            {
              content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
              isCorrect: true,
              response: "string"
            },
            {
              content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
              isCorrect: false,
              response: "string",
            },
            {
                content: "The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
                isCorrect: false,
                response: "string",
            },
            {
                content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
                isCorrect: false,
                response: "string"
              },
          ],
          isInput: false,
          inputQuestion: "",
          correctAnswer:"0",
          wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
       },
       {
        statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
        isMultipleChoice: true,
        choices:[
          {
            content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
            isCorrect: true,
            response: "string"
          },
          {
            content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
            isCorrect: false,
            response: "string",
          },
          {
              content: "The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
              isCorrect: false,
              response: "string",
          },
          {
              content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
              isCorrect: false,
              response: "string"
            },
        ],
        isInput: false,
        inputQuestion: "",
        correctAnswer:"0",
        wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
     }, {
        statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
        isMultipleChoice: true,
        choices:[
          {
            content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
            isCorrect: true,
            response: "string"
          },
          {
            content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
            isCorrect: false,
            response: "string",
          },
          {
              content: "The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
              isCorrect: false,
              response: "string",
          },
          {
              content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
              isCorrect: false,
              response: "string"
            },
        ],
        isInput: false,
        inputQuestion: "",
        correctAnswer:"0",
        wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
     }, {
        statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
        isMultipleChoice: true,
        choices:[
          {
            content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
            isCorrect: true,
            response: "string"
          },
          {
            content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
            isCorrect: false,
            response: "string",
          },
          {
              content: "The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
              isCorrect: false,
              response: "string",
          },
          {
              content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
              isCorrect: false,
              response: "string"
            },
        ],
        isInput: false,
        inputQuestion: "",
        correctAnswer:"0",
        wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
     } ,{
        statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
        isMultipleChoice: true,
        choices:[
          {
            content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
            isCorrect: true,
            response: "string"
          },
          {
            content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
            isCorrect: false,
            response: "string",
          },
          {
              content: "The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
              isCorrect: false,
              response: "string",
          },
          {
              content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
              isCorrect: false,
              response: "string"
            },
        ],
        isInput: false,
        inputQuestion: "",
        correctAnswer:"0",
        wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
     }
    ],
    endPhaseQuotes: "Good luck"
  };


let listOfHelpQuestion:Array<HelpQuestion> = [{
    name: "string",
    openQuestion: "What do you think will happen when the box is dropped onto the conveyor belt ?",
    subquestion:[
       {
          statment: "What do you think will happen when the box is dropped onto the conveyor belt?",
          isMultipleChoice: true,
          choices:[
            {
              content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
              isCorrect: true,
              response: "string"
            },
            {
              content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
              isCorrect: false,
              response: "string",
            },
            {
                content: "The box will begin to accelerate as soon as it touches the conveyor. The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
                isCorrect: false,
                response: "string",
            },
            {
                content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
                isCorrect: false,
                response: "string"
              },
          ],
          isInput: false,
          inputQuestion: "",
          correctAnswer:"0",
          wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
       }
    ],
    endPhaseQuotes: "Good luck"
  },
  {
    name: "string",
    openQuestion: "qưertyuiosdfghjk the box is dropped onto the conveyor belt ?",
    subquestion:[
       {
          statment: "OGHHH n when the box is dropped onto the conveyor belt?",
          isMultipleChoice: true,
          choices:[
            {
              content: "The box will stick to the conveyor belt, and reach speed v = 6.2 m/s instantaneosly.",
              isCorrect: true,
              response: "string"
            },
            {
              content: "The box will sit motionless for a few seconds until enough force builds up to change its velocity.",
              isCorrect: false,
              response: "string",
            },
            {
                content: "The box will begin to accelerate as soon as it touches the conveyor. The belt will slide underneath the box, accelerating the box uniformly. Then, the box will reach the same speed as the belt, and the box will stop accelerating.",
                isCorrect: false,
                response: "string",
            },
            {
                content: "The box will accelerate less as it approaches the speed of the conveyor. So, the box will come closer and closer to the speed of the belt, but it will never quite reach the same speed.",
                isCorrect: false,
                response: "string"
              },
          ],
          isInput: false,
          inputQuestion: "",
          correctAnswer:"0",
          wordSuggestion : ["OK,Ola,bello"] //Hi vong co 1 cai plugin
       }
    ],
    endPhaseQuotes: "Good luck"
  }

];

export default {
    fakeSubQuestion:fakeHelper,
    listOfHelpQuestion:listOfHelpQuestion
}
