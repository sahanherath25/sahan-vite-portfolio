import React from 'react';
import {
    Box,
    Typography,
    Chip,
    Divider,
    Card,
    CardMedia,
    Stack,
    Button,
} from "@mui/material";
import {useParams} from "react-router-dom";

const projects = [
    {
        id: "campus-connect",
        name: "Campus Connect",
        image: "https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//discord-app.png",
        intro: "A social platform for students to connect and collaborate within the campus.",
        duration: "Jan 2024 - Mar 2024",
        technologies: ["React", "React Native", "Node.js", "Firebase"],
        deployment: "Vercel & Firebase",
        architecture: "Microservices with Firebase Auth and Firestore DB",
        stateManagement: "Redux",
        styling: "SCSS Modules + MUI",
        testing: ["Mocha", "Chai"],
        versionControl: "GitHub",
        cicd: "GitHub Actions with CI/CD pipeline for deployment",
    },
];



// import { projects } from "../data/projects"; // or fetch from Supabase

function ProjectDetailPage() {

    // const {projectId} = useParams();
    const project = projects[0];

    console.log("PRojetc ", project);

    if (!project) return <Typography>Project not found.</Typography>;

    return (
        <Box sx={{ p: 4, width: "100%", margin: "auto" }}>
            <Card sx={{ mb: 4, borderRadius: 4, overflow: "hidden" }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={project.image}
                    alt={project.name}
                    objectFit="cover"
                />
            </Card>

            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {project.name}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                {project.intro}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Stack spacing={2}>
                <Typography variant="body1"><strong>📆 Duration:</strong> {project.duration}</Typography>
                {/*<Typography variant="body1"><strong>🛠️ Technologies:</strong> {project.technologies.join(", ")}</Typography>*/}
                <Typography variant="body1"><strong>🚀 Deployment:</strong> {project.deployment}</Typography>
                <Typography variant="body1"><strong>🏗 Architecture:</strong> {project.architecture}</Typography>
                <Typography variant="body1"><strong>🔄 State Management:</strong> {project.stateManagement}</Typography>
                <Typography variant="body1"><strong>🎨 Styling:</strong> {project.styling}</Typography>
                {/*<Typography variant="body1"><strong>🧪 Testing:</strong> {project.testing.join(", ")}</Typography>*/}
                <Typography variant="body1"><strong>📂 Version Control:</strong> {project.versionControl}</Typography>
                <Typography variant="body1"><strong>⚙️ CI/CD:</strong> {project.cicd}</Typography>
            </Stack>

            <Box mt={4}>
                <Button variant="contained" href="https://github.com/yourproject" target="_blank">
                    View Demo
                </Button>
                <Button variant="contained" href="https://github.com/yourproject" target="_blank">
                    View on GitHub
                </Button>
            </Box>
        </Box>
    );
}

export default ProjectDetailPage;