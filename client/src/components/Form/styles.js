import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    .paper{
        padding: 2%;
    }

    .form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .fileInput {
        width: 97%;
        margin: 10px 0;
    }

    .buttonSubmit {
        margin-bottom: 2%;
        background-color: rgba(234, 101, 101, 0.65);
    }

    .buttonSubmit:hover{
        background-color: rgba(177, 85, 85, 0.37);
    }
    .buttonClear {
        margin-bottom: 2%;
        background-color: rgba(57, 14, 14, 0.37);
    }

    .buttonClear:hover {
        background-color: rgba(57, 14, 14, 0.14);

    }

    .input{
        margin: 2%;
    }
`
    
