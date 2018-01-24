import React, { Component } from "react";
import { render } from "react-dom";
import styles from '../css/already-read.css';

class AlreadyReaded extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "hello",
            books: [{
                preview: {
                    url: 'http://t1.gstatic.com/images?q=tbn:ANd9GcSMZIPQ4MPsjkV8EEXvLHhOpeO3A2HMSfpBBauFv4XbrXtwGMxq'
                },
                title: '小王子',
                author: '圣埃克苏佩里'
            }, {
                preview: {
                    url: 'http://t1.gstatic.com/images?q=tbn:ANd9GcSMZIPQ4MPsjkV8EEXvLHhOpeO3A2HMSfpBBauFv4XbrXtwGMxq'
                },
                title: '再见，这世界',
                author: '叶湑'
            }]
        }
    }

    render() {
        return (
            <div className={ styles.wrap }>
                <aside className={ styles.aside }>
                    <h2>读书</h2>
                </aside>
                <section className={ styles.books }>
                    <h3 className={ styles.title }>看过的书</h3>
                    <ul className={ styles.list }>
                        { this.state.books.map((item,key) => {
                            return (
                                <li key={key}>
                                    <img src={item.preview.url} />
                                    <h3>{item.title}</h3>
                                    <p>{item.author}</p>
                                </li>
                            )
                        }) }
                    </ul>
                </section>
            </div>
        )
    }
}

export default AlreadyReaded;
