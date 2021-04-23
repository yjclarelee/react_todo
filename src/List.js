import React from 'react';

export default function List({ dataList, removeList, strikeThrough}) { 


    return (
        <>
            {dataList.map(list => <li key={list.id}>
                <input type="checkbox" onClick={() => strikeThrough(list.id)}/>
                <span style={{textDecoration: list.isValid ? "" : "line-through"}}>{list.content}</span>
                <button type="button" onClick={() => removeList(list.id)}>x</button>
            </li>)}
        </>
    )
}