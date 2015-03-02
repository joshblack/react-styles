module.exports = `
    base {
        background: grey;
        color: black;

        minWidth {
            320 {
                background: black;
                color: white;
                font-size: 18px;
            }
        }

        maxWidth {
            480 {
                font-size: 24px;
            }
        }
    }

    open {
        background: blue;
        color: grey;

        minWidth {
            540 {
                background: darkblue;
            }
        }

        maxWidth {
            480 {
                color: purple;
            }
        }
    }
`;