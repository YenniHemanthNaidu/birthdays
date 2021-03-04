import React from 'react';

const List = ({ people }) => {
    return ( <
        >
        {
            people.map((person) => {
                const { id, name, age, image } = person;
                const style = {
                    width: "55px",
                    height: "55px",

                };
                return ( <
                    article key = { id }
                    className = "person" >
                    <
                    img src = { image }
                    alt = { name }
                    />  <a href="https:/ / web.whatsapp.com / "><
                    img src = "https://image.shutterstock.com/image-vector/green-button-phone-bubble-chat-260nw-1136309198.jpg"
                    alt = " "
                    style = { style }
                    / > < /a > <
                    a href = "https://www.amazon.com " > <
                    img src = "data:image/png;base64,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"
                    alt = ""
                    style = {
                        style
                    }
                    / > < /a > < div > <
                    h4 > { name } < /h4> <
                    p > { age }
                    years < /p> < /
                    div > <
                    /article>
                );
            })
        } <
        />
    );
};

export default List;