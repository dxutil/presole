export default {
  root: true,
}

/*
  root
  config 파일이 여러개일 경우 root를 기준으로 중복여부 검사해야함.
  config 파일이 root에 1개 1depth에 1개 있을 경우, 1depth가 root: false라면, root와 1depth의 설정이 중복되는 경우에는 root의 설정에 1depth 설정이 뒤덮는다.
  1depth의 root: true라면 root 설정을 하나도 사용하지 않고, 1depth의 설정만 사용한다.
*/
