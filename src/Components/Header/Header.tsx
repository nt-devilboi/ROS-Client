import React from "react";
import styles from "./Header.module.css"
import {observer} from "mobx-react";

const Header = observer(
    class Header extends React.Component{
        render() {
            return (
                <div className={styles.HeaderText}>
                    <a>Вести данные</a>
                    <a>показать все данные</a>
                </div>

            )
        }
    }
    )


export default Header