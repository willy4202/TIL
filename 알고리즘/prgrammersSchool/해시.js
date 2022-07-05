function solution(participant, completion) {
  var answer = "";
  let participantSort = participant.sort();
  let completionSort = completion.sort();

  /*   
 for(i=0; i<participantSort.length; i++){
        if(participantSort[i] !== completionSort[i]){
            answer = participantSort[i];
            break;
        }
    }
    반복문은 찾아도 계속 돌아간다, forOf, 보단 i++로 표현하는게 효율성에서 더 좋다.
    만약 sort를 했다면, find를 사용하는 것이 적합하다.
*/

  return participantSort.find((x, i) => x !== completionSort[i]);
}
