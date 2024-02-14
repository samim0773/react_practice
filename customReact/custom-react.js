function customRender(reactElement, container) {
    /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  document.setAttribute("targer", reactElement.props.target);

  */

  document.documentElement = document.createElement(reactElement.type)
  
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
