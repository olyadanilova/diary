
// import * as React from "react";
// import { hot } from "react-hot-loader/root";
// import {TypeDiary} from "./Constants";
// import {Col, Row} from "react-bootstrap";
//
// export const listTest: TypeDiary[] =[
//     {note: "1", date: "2019-01"},
//     {note: "2", date: "2019-02"},
//     // {note: "3", date: "2019-03"}
// ];
//
// export interface TestProps {
// }
//
// export interface TestState {
//     listDiary: TypeDiary[];
// }
// export class Test extends React.Component<TestProps, TestState>{
//
//     state: TestState = {
//         listDiary: [],
//     };
//
//     componentDidMount(): void{
//         let qwerty: any = JSON.stringify(listTest);
//         localStorage.setItem("testik", qwerty);
//         let qwertyNew:any = JSON.parse(localStorage.getItem("testik")!);
//         console.log("test!!!", JSON.parse(localStorage.getItem('qwertyNew')!));
//         //  ('form')! - добавлена проверка, так как localStorage.getItem() может возвращать строку или ноль.
//         // JSON.parse () требует строку, поэтому нужно проверить результат localStorage.getItem ()
//         // console.log("test!!!", JSON.parse(localStorage.getItem('testik')!));
//         this.setState({
//                 ...this.state.listDiary,
//             listDiary: JSON.parse(localStorage.getItem('testik')!)
//         })
//     }
//
//     render(){
//         let tableDiary = this.state.listDiary.map((el, index)=>
//             <Row className="table-with-border" key={index}>
//                 <Col  md={8} xs={8} className="text-center"> {el.note} </Col>
//                 <Col  md={2} xs={2} className="text-center">
//                     {el.date}
//                 </Col>
//                 {/*<Col  md={2} xs={2} className="text-center">*/}
//                 {/*    <input type={"checkbox"} onChange={this.onCheckChois}*/}
//                 {/*           value={el.choice} />*/}
//                 {/*    /!*<input type={"checkbox"} checked disabled/>*!/*/}
//                 {/*</Col>*/}
//             </Row>
//         );
//         return <div id={'testik'}>
//             {tableDiary}
//         </div>
//     }
// }
// export default hot(Test);