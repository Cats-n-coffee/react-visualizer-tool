// eslint-disable-next-line
import styled, { css } from 'styled-components/macro';
import React from 'react';
import SingleComponent from './SingleComponent';
import { SingleComponentStyled } from './styles/componentStyles';

export default function ComponentTreeContainer(props) {
    const { setPopup, setType, data, parent = '', level = 0 } = props;
    const [showOptions, setShowOptions] = React.useState(false);
  
console.log('items are', data, 'level', level)
    if (!data || !data.length) return null;

    function handleAddClick(e) {
        console.log(e.target)
        setPopup(true);
        setType("component-add-form");
    }

    function handleEditClick() {
        setPopup(true);
        setType("component-edit-form");
    }

    function handleHover(e) {
        console.log(e.target.parentElement.firstChild.innerText)
        setShowOptions(true)
    }

    return (
        <>
            { // not working with SingleComponent but with regular element
                data.map(item => (
                    <div key={item.name}>
                        <SingleComponent  
                            component={item}
                            setPopup={setPopup}
                            setType={setType}
                        />
                            <ComponentTreeContainer 
                                data={ item.allChildren } 
                                parent={ item.name } 
                                level={level + 1}
                                setPopup={ setPopup }
                                setType={ setType }
                            />    
                    </div>
                ))
            }
        </>
    )
}

// https://stackoverflow.com/questions/54040222/recursively-render-react-component
// https://kyleshevlin.com/recursive-react-components
// https://betterprogramming.pub/recursive-rendering-with-react-components-10fa07c45456
// https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children