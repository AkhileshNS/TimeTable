
// External Libraries
import React from 'react';

// Internal Libraries
import "./TimeTable.css";

const TimeTable = props => {
    let tables = [props.previous, props.current, props.next];
    let TimeTable = [];

    for (let k in tables) {
        let table = tables[k];
        if (table===null) {
            continue;
        }

        let rows = [];
        for (let i in table) {

            let columns = [];
            for (let j in table[i]) {
                let info = table[i][j];

                let containerStyle = "";
                let textStyle = "";
                if (info.includes("|")) {
                    let keys = info.split("|");
                    info = keys[0];
                    console.log(keys);

                    for (let key of keys[1]) {
                        switch(key) {
                            case "h": {
                                containerStyle += "header ";
                                textStyle += "header-title ";
                                break;
                            }
                            case "t": {
                                containerStyle += "top";
                                break;
                            }
                            case "b": {
                                containerStyle += "bottom";
                                break;
                            }
                            case "l": {
                                containerStyle += "-left ";
                                break;
                            }
                            case "r": {
                                containerStyle += "-right ";
                                break;
                            }
                            case "p": {
                                textStyle += "red ";
                                break;
                            }
                            case "n": {
                                textStyle += "green ";
                                break;
                            }
                            default: break;
                        }
                    }
                }

                columns.push(<div key={j} className={"column " + containerStyle}>
                    <p className={textStyle}>{info}</p>
                </div>);
            }
            rows.push(<div key={i} className={"row"}>
                {columns}
            </div>);
        }

        if (parseInt(k)===0) {
            TimeTable.push(<h2 className="table-title">Previous Time Table</h2>);
        } else if (parseInt(k)===1) {
            TimeTable.push(<h2 className="table-title">Changes in Time Table</h2>);
        } else {
            TimeTable.push(<h2 className="table-title">Expecting Time Table</h2>);
        }

        TimeTable.push(<div key={k} className="table">
            {rows}
        </div>);
    }

    return <div className="TimeTable">
        {TimeTable}
    </div>
};

export default TimeTable;