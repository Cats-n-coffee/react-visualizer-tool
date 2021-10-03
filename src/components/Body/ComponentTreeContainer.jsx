import React from 'react';
import SingleComponent from './SingleComponent';

export default function ComponentTreeContainer(props) {
    const { setPopup, setType, data, parent = '', level = 0 } = props;
  
console.log('items are', data, 'level', level)
    if (!data || !data.length) return null;

    return (
        <div>
            this is the component tree container
            { // not working with SingleComponent but with regular element
                data.map(item => (
                    <SingleComponent 
                        key={ item.name } 
                        component={ item } 
                        level={ level }
                        setPopup={ setPopup }
                        setType={ setType }
                    >
                        <ComponentTreeContainer 
                        data={ item.children } 
                        parent={ item.name } 
                        level={level + 1}
                        setPopup={ setPopup }
                        setType={ setType }
                        />
                    </SingleComponent>
                ))
            }
        </div>
    )
}

// https://stackoverflow.com/questions/54040222/recursively-render-react-component
// https://kyleshevlin.com/recursive-react-components
// https://betterprogramming.pub/recursive-rendering-with-react-components-10fa07c45456