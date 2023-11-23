import "./Styles/Home.css";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { BlackScreen } from "./";
import { templates } from "../Utils/Data/templates";
import { selectTemplate } from "../Redux/Actions/actions";
import { CgMouse } from 'react-icons/cg';
import { Fragment } from "react";

const mapStateToProps = (state) => ({
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});
const mapDispatchToProps = (dispatch) => ({
    setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
});

const Home = (props) => {
    const navigate = useNavigate();

    const navigateToFillDetails = (id) => {
        props.setSelectedTemplateId(id);
        navigate("/template/fill-details");
    };
    return (
        <>

            <>
                <Fragment>
                    <div className="banner">
                        <p>Welcome to my resume builder website </p>
                        <h1>FIND  AMAZING TEMPLATE BELOW </h1>
                        <a href="#home">
                            <button>
                                Scroll <CgMouse />
                            </button>
                        </a>
                    </div>
                    
                </Fragment>

                <div className="home" id="home">
                <h2 className="homeHeading">Select Resume</h2>
                    <div className="home-templates-cont">
                        <Stack
                            sx={{
                                width: "100%",
                                display: "grid",
                                gridTemplateColumns: {
                                    sm: "1fr 1fr",
                                    md: "1fr 1fr",
                                    lg: "1fr 1fr 1fr",
                                    xl: "1fr 1fr 1fr 1fr",
                                },
                                gridGap: "30px",
                            }}
                        >
                            {templates.map((template) => {
                                return (
                                    <Box
                                        key={template.id}
                                        id="template"
                                        className="templates-img-cont"
                                    >
                                        <img
                                            style={{ width: "75%" }}
                                            className="template-img"
                                            src={template.template_img}
                                            alt={template.template_name}
                                        />
                                        <BlackScreen />
                                        <Button
                                            className="use-template-btn"
                                            onClick={() => navigateToFillDetails(template.id)}
                                            size="medium"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Use Template
                                        </Button>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </div>
                </div>
            </>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
