import React, { useState } from 'react';

// hook 方式，函数型组件
function App() {
  // // useState(xxx) 接收的参数是状态的初始值，返回一个数组：第0位是当前的状态值，第1位是可以改变状态值的函数

  // const [ count, setCount ] = useState(0)
  // return (
  //   <div>
  //     <p>You've clicked { count } times.</p>
  //     <button onClick={()=>{setCount(count+1)}}>Click Me!</button>
  //   </div>
  // )

  // 多状态声明
  // react 是根据 useState 出现的顺序来确定的
  // // React Hooks 不能出现在条件判断语句重。因为它必须有完全一样的渲染顺序
  const [ age, setAge ] = useState(18)
  const [ sex, setSex ] = useState('女')
  const [ work, setWork ] = useState('板砖的')
  return (
    <div>
      <h3>多状态声明</h3>
      <p>年龄：{ age }</p>
      <p>性别：{ sex }</p>
      <p>职业：{ work }</p>
    </div>
  )
}

// // class 方式
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }
//   render() {
//     return (
//       <div>
//         <p>You've clicked { this.state.count } times.</p>
//         <button onClick={this.addCount.bind(this)}>Click Me!</button>
//       </div>
//     )
//   }
//   addCount() {
//     this.setState({ count: this.state.count + 1 })
//   }
// }

export default App;
