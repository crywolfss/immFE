import React, { useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import axios from 'axios'; // For making API calls

export const FormSurvey = () => {
    const [shareableLink, setShareableLink] = useState('');

    const surveyJson = {
        title: "Survey",
        description: "Please fill out the following survey.",
        pages: [
            {
                elements: [
                    {
                        type: "text",
                        name: "businessProjectName",
                        title: "Masukkan Nama Business/Project",
                        isRequired: true,
                    },
                    {
                        type: "text",
                        name: "surveyTitle",
                        title: "Masukkan Judul Survey",
                        isRequired: true,
                    },
                    {
                        type: "text",
                        name: "surveyDescription",
                        title: "Masukkan Deskripsi Survey",
                        isRequired: true,
                    },
                    {
                        type: "text",
                        name: "fullName",
                        title: "Nama Lengkap",
                        isRequired: true,
                    },
                    {
                        type: "text",
                        inputType: "email",
                        name: "email",
                        title: "Email",
                        isRequired: true,
                    },
                    {
                        type: "text",
                        name: "phoneNumber",
                        title: "No HP",
                        isRequired: true,
                    },
                    {
                        type: "paneldynamic",
                        name: "questions",
                        title: "Pertanyaan",
                        templateElements: [
                            {
                                type: "comment",
                                name: "question",
                                title: "Ketik Di Sini Pertanyaan Anda",
                                isRequired: true,
                            }
                        ],
                        panelCount: 5,
                        panelAddText: "Tambah Pertanyaan",
                        panelRemoveText: "Hapus Pertanyaan",
                        maxPanelCount: 5
                    }
                ]
            }
        ]
    };

    const surveyComplete = async (result) => {
        console.log("Survey results: ", result.data);

        try {
            // Mock API call to store survey results and get a unique link
            const response = await axios.post('https://example.com/api/store-survey', result.data);
            // Assuming the response contains the unique link
            const uniqueLink = response.data.link;
            setShareableLink(uniqueLink);

        } catch (error) {
            console.error('Error storing survey results:', error);
        }
    };

    return (
        <div className='mx-auto max-w-7xl p-6 lg:px-8'>
            <Survey.Survey json={surveyJson} onComplete={surveyComplete} />
            {shareableLink && (
                <div className="mt-8">
                    <p>Your survey has been saved. Share this link:</p>
                    <a href={shareableLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{shareableLink}</a>
                </div>
            )}
        </div>
    );
};
