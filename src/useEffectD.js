// 用 useEffect 函数来代替生命周期函数

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

    return () => {
      console.log('========')
    }
  }, [count]) // 想要每次count发生变化，都进行解绑，在第二个参数里传入对应的变量

  return (
    <div>
      <p>You clicked { count } times.</p>
      <button onClick={() => {setCount(count + 1)}}>Click Me!</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" component={Index} exact />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}

// useEffect 可以用 返回一个函数的形式进行解绑，实现类似 componentWillUnmount 的效果
// useEffect 的第二个参数是一个数组，数组中可写入很多状态对应的变量，当状态值发生变化时，才进行解绑。
          // 当传空数组 [] 时，就是当组件被销毁时进行解绑，这样能实现 componentWillUnmount
function Index() {
  useEffect(() => {
    console.log('useEffect => 你来啦！这里是 Index')
    // 可以用 返回一个函数的形式进行解绑
    return () => {
      console.log('俺要走了 Index')
    }
  }, [])
  return (
    <h2>Index Mayue Page</h2>
  )
}
function List() {
  useEffect(() => {
    console.log('useEffect => 你来啦！这里是 List')
    return () => {
      console.log('俺走了，List')
    }
  }, [])
  return (
    <h2>List PAge</h2>
  )
}
export default Effect