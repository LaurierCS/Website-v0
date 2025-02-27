import { Box, Text, Button, createStyles, MantineTheme } from "@mantine/core";
import { FaYoutube, FaTwitch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const useStyles = createStyles((theme: MantineTheme) => ({
    card: {
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: theme.radius.lg,
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        height: "100%",

        [theme.fn.smallerThan("sm")]: {
            padding: "1.5rem",
        },
    },

    title: {
        fontSize: "1.8rem",
        fontWeight: 700,
        marginBottom: "1rem",
        color: "white",

        [theme.fn.smallerThan("sm")]: {
            fontSize: "1.4rem",
        },

        [theme.fn.smallerThan("xs")]: {
            fontSize: "1.2rem",
        },
    },

    description: {
        fontSize: "1.1rem",
        lineHeight: 1.6,
        color: theme.colors.gray[3],
        marginBottom: "2rem",
        flex: 1,
        wordBreak: "break-word",

        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
            marginBottom: "1.5rem",
        },
    },

    buttonGroup: {
        display: "flex",
        gap: "1rem",
        flexWrap: "nowrap",
        marginTop: "auto",
        width: "100%",

        [theme.fn.smallerThan("sm")]: {
            gap: "0.5rem",
            "& > a": {
                flex: "1 1 200px",
                maxWidth: "200px",
                minWidth: 0,
                fontSize: "0.9rem",
                padding: "0.5rem",
            },
        },

        [theme.fn.smallerThan("xs")]: {
            "& > a": {
                fontSize: "0.8rem",
                padding: "0.5rem 0.25rem",
            },
        },
    },

    link: {
        color: theme.colors.blue[4],
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
            color: theme.colors.blue[5],
        },
    },

    button: {
        transition: "all 0.2s ease",
        "&:hover": {
            transform: "translateY(-2px)",
        },
    },

    youtubeButton: {
        "&:hover": {
            boxShadow: "0 2px 15px rgba(255, 0, 0, 0.3)",
        },
    },

    twitchButton: {
        "&:hover": {
            boxShadow: "0 2px 15px rgba(145, 70, 255, 0.3)",
        },
    },
}));

const ReviewSessions = () => {
    const { classes } = useStyles();
    const navbarHeight = 60;

    return (
        <motion.div
            style={{ width: "100%", height: "100%" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Box className={classes.card}>
                <Text className={classes.title}>✏️ Review Sessions</Text>
                <Text className={classes.description}>
                    Interactive study sessions that make learning fun! Join us for engaging Kahoot games
                    and comprehensive slide shows covering course content. Our experienced upper-year students
                    break down complex topics and share study strategies that have helped them succeed.
                    Keep an eye on our{" "}
                    <Link
                        to="Events"
                        offset={-navbarHeight}
                        smooth
                        duration={300}
                        className={classes.link}
                    >
                        upcoming events
                    </Link>{" "}
                    to participate.
                </Text>
                <div className={classes.buttonGroup}>
                    <Button
                        className={`${classes.button} ${classes.youtubeButton}`}
                        component="a"
                        variant="gradient"
                        gradient={{ from: "red.7", to: "red.9" }}
                        href="https://www.youtube.com/@LaurierComputingSociety/playlists"
                        size="md"
                        leftIcon={<FaYoutube size={20} />}
                        target="_blank"
                        rel="external noreferrer"
                    >
                        Past Sessions
                    </Button>
                    <Button
                        className={`${classes.button} ${classes.twitchButton}`}
                        component="a"
                        variant="gradient"
                        gradient={{ from: "violet.7", to: "violet.9" }}
                        href="https://www.twitch.tv/lauriercs"
                        size="md"
                        leftIcon={<FaTwitch size={20} />}
                        target="_blank"
                        rel="external noreferrer"
                    >
                        Live Sessions
                    </Button>
                </div>
            </Box>
        </motion.div>
    );
};

export default ReviewSessions;
