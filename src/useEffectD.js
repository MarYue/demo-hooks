// 用 useEffect 函数来代替生命周期函数

import React, { useState, useEffect } from 'react';

// // class 方式实现的生命周期
// class Effect extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0}
//   }

//   componentDidMount() {
//     console.log(`ComponentDidMount => You clicked ${this.state.count} times.`)
//   }

//   componentDidUpdate() {
//     console.log(`ComponentDidUpdate => You clicked ${this.state.count} times.`)
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked { this.state.count } times.</p>
//         <button onClick={this.addCount.bind(this)}>Click Me!</button>
//       </div>
//     )
//   }

//   addCount() {
//     this.setState({ count: this.state.count + 1 })
//   }
// }

function Effect() {
  const [ count, setCount ] = useState(0)
  // 用 useEffect 来替代 class 方式中的生命周期函数
  // useEffect 函数在首次渲染和之后的每一次渲染都会调用一遍；
  // useEffect 中定义的函数的执行不会阻碍浏览器更新视图，这些函数是异步执行的。
  useEffect(() => {
    console.log(`useEffect => You clicked ${count} times.`)
  })

  return (
    <div>
      <p>You clicked { count } times.</p>
      <button onClick={() => {setCount(count + 1)}}>Click Me!</button>
    </div>
  )
}
export default Effect