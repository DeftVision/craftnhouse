import React, { useState } from 'react';
import {Box, Paper, Typography, Avatar, Stack, Button} from '@mui/material';
import AnimatedBox from '../AnimatedBox';

const testimonials = [
    {
        name: 'Cassi K.',
        feedback: `Trina built bookshelves and a window seat! She did a great job and they turned out so well! I really liked working with her. The photos are before paint which I opted to do. I can’t wait to get all my books set up!`,
        initials: 'CK',
        image: '/images/testimonials/bookshelf-cassi-k.webp',
        projectLabel: 'Built-In Bookshelves'
    },
    {
        name: 'Jeremy B.',
        feedback: `Trina installed two exterior doors for us. Her work was excellent with an obvious eye for detail. She was responsive, detail oriented, and offered a very competitive bid.`,
        initials: 'JB',
        image: '/images/testimonials/exterior-door-jeremy-b.webp',
        projectLabel: 'Exterior Door Installation'
    },
    {
        name: 'Elsa Z.',
        feedback: `They were great! Very professional and the work was meticulously done. They were quick to respond with contacted and had superb follow-up. I would highly recommend them for your project that is too small for a big contractor and too big for you to handle. The can complete the entire project from start to finish! They framed, dry walled, mudded, taped, painted and installed tile and mantle of my new fireplace.`,
        initials: 'EZ',
        image: '/images/testimonials/fireplace-elsa-z.webp',
        projectLabel: 'Custom Fireplace'
    },
];

export default function TestimonialBlock() {
    const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));

    const toggleExpand = (index) => {
        const copy = [...expanded];
        copy[index] = !copy[index];
        setExpanded(copy);
    };

    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>What People Are Saying</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4
                }}
            >
                {testimonials.map((t, i) => (
                    <AnimatedBox key={i} sx={{ maxWidth: 300, flex: '1 1 250px' }}>
                        <Paper sx={{ p: 0, overflow: 'hidden', borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 160,
                                    overflow: 'hidden',
                                    '&:hover .overlay-label': {
                                        opacity: 1
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={t.image}
                                    alt={`${t.name}'s project`}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)'
                                        }
                                    }}
                                />
                                <Box
                                    className="overlay-label"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        bgcolor: 'rgba(0,0,0,0.5)',
                                        color: '#fff',
                                        px: 2,
                                        py: 1,
                                        fontSize: 14,
                                        textAlign: 'left',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'none'
                                    }}
                                >
                                    {t.projectLabel}
                                </Box>
                            </Box>

                            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                                    <Avatar>{t.initials}</Avatar>
                                    <Typography variant="subtitle1">{t.name}</Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: expanded[i] ? 'none' : 3,
                                        WebkitBoxOrient: 'vertical',
                                        transition: 'all 0.3s ease',
                                        flexGrow: 1
                                    }}
                                >
                                    "{t.feedback}"
                                </Typography>
                                {t.feedback.length > 150 && (
                                    <Button
                                        size="small"
                                        onClick={() => toggleExpand(i)}
                                        sx={{ mt: 1, alignSelf: 'flex-start', textTransform: 'none' }}
                                    >
                                        {expanded[i] ? 'Show Less' : 'Read More'}
                                    </Button>
                                )}
                            </Box>
                        </Paper>
                    </AnimatedBox>

                ))}
            </Box>
        </Box>
    );
}
