export default props => {
  if (props.teste) {
    return props.children;
  } else {
    return false; {/* false = não vai renderizar nada */}
  }
};
