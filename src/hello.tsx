import React, {useRef, useState} from 'react'
import {Button, Space, Tour} from 'antd';

export default function Hello() {
    const [open, setOpen] = useState(false);
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    return <Space direction={"vertical"}>
        <div><Button onClick={() => setOpen(true)}>Tour</Button></div>
        <Tour open={open} onClose={() => setOpen(false)} steps={[
            {
                title: '1111',
                description: '11111',
                target: () => ref1.current
            },
            {
                title: '2222',
                description: '22222',
                target: () => ref2.current,
            },
            {
                title: '3333',
                description: '33333',
                target: () => ref3.current,
            }
        ]}/>
        <div>
            <ul>
                <li ref={ref1}>aaaa</li>
                <li ref={ref2}>bbbb</li>
                <li ref={ref3}>cccc</li>
            </ul>
        </div>
    </Space>
};
