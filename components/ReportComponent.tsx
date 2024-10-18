// import React, { ChangeEvent } from 'react'
// import { Input } from './ui/input'
// import { Button } from './ui/button'
// import { Label } from './ui/label'
// import { Textarea } from './ui/textarea'
// import { useToast } from "@/hooks/use-toast"

// type Props = {}

// const ReportComponent = (props: Props) => {
//     const { toast } = useToast()
//     const [base64Data, setBase64Data] = React.useState<string | null>(null);
//     function handelReportSelection(event: ChangeEvent<HTMLInputElement>): void {
//         if (!event.target.files) return;

//         const file = event.target.files[0];
//         if (file) {
//             let isValidImage = false
//             let isValidDoc = false
//             const validImages = ['image/jpeg', 'image/jpg', 'image/png']
//             const validDocs = ['application/pdf']

//             if (validImages.includes(file.type)) {
//                 isValidImage = true
//             }
//             if (validDocs.includes(file.type)) {
//                 isValidDoc = true
//             }
//             if (!(isValidImage || isValidDoc)) {
//                 toast({
//                     description: "Filetype Not supported",
//                     variant: "destructive"
//                 })
//                 return
//             }
//             if (isValidDoc) {
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                     const fileContent = reader.result as string;
//                     console.log(fileContent);
//                     setBase64Data(fileContent);
//                 }
//                 reader.readAsDataURL(file);
//             }
//             if (isValidImage) {
//                 compressImage(file, (compressedFile: File) => {
//                     const reader = new FileReader();
//                     reader.onloadend = () => {
//                         const fileContent = reader.result as string;
//                         console.log(fileContent);
//                         setBase64Data(fileContent);
//                     }
//                     reader.readAsDataURL(compressedFile);
//                 })
//             }
//         }
//     }

//     async function extracDetails(): void {
//         if (!base64Data) {
//             toast({
//                 description: "Please upload a valid report",
//                 variant: "destructive"
//             })
//             return
//         }
//         const response = await fetch('api/extractreportgemini',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ base64Data })
//             }

//         )
//         if (response.ok) {
//             const reportText = await response.text()
//             console.log(reportText);

//         }

//     }

//     return (
//         <div className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'>
//             <fieldset className='relative grid gap-6 rounded-lg border p-4'>
//                 <legend className='text-lg font-medium'>Report</legend>
//                 <Input type='file' onChange={handelReportSelection}></Input>
//                 <Button onClick={extracDetails}>1. Upload File</Button>
//                 <Label>Report Summry</Label>
//                 <Textarea placeholder='Extracted data from the report will appear here. Get better recommendations by providing additional patient history and sympotoms...' className='min-h-72 resize-none border-0 p-3 shadow-none focus-visible:ring-0'></Textarea>
//                 <Button variant={'destructive'} className='bg-[#D90013]'>2. Looks Good </Button>
//             </fieldset>
//         </div>
//     )
// }

// export default ReportComponent
// // function compressImage(file: File, callback: (compressedFile: File) => void) {
// //     const reader = new FileReader();
// //     reader.onload = (e) => {
// //         const img = new Image();
// //         img.onload = () => {
// //             //create canvas element 
// //             const canvas = document.createElement('canvas');
// //             const ctx = canvas.getContext('2d');

// //             canvas.width = img.width;
// //             canvas.height = img.height;
// //             ctx!.drawImage(img, 0, 0);
// //             const quality = 0.1;

// //             const dataURL = canvas.toDataURL('image/jpeg', quality);
// //             const byteString = atob(dataURL.split(',')[1]);
// //             const ab = new ArrayBuffer(byteString.length);
// //             const ia = new Uint8Array(ab);
// //             for (let i = 0; i < byteString.length; i++) {
// //                 ia[i] = byteString.charCodeAt(i);
// //             }
// //             const compressedFile = new File([ab], file.name, { type: 'image/jpeg' });
// //             callback(compressedFile);
// //         }
// //         img.src = e.target!.result as string;
// //     };
// //     reader.readAsDataURL(file);
// // }
// function compressImage(file: File, callback: (compressedFile: File) => void) {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//         const img = new Image();

//         img.onload = () => {
//             // Create canvas element
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');

//             if (!ctx) {
//                 throw new Error('Could not get canvas context');
//             }

//             // Set canvas dimensions
//             canvas.width = img.width;
//             canvas.height = img.height;

//             // Draw the image on the canvas
//             ctx.drawImage(img, 0, 0);

//             const quality = 0.1; // Compression quality (0.0 to 1.0)

//             // Convert canvas to Data URL and then to a compressed file
//             const dataURL = canvas.toDataURL('image/jpeg', quality);
//             const byteString = atob(dataURL.split(',')[1]);
//             const ab = new Uint8Array(byteString.length);

//             for (let i = 0; i < byteString.length; i++) {
//                 ab[i] = byteString.charCodeAt(i);
//             }

//             // Create a new file from the compressed data
//             const compressedFile = new File([ab], file.name, { type: 'image/jpeg' });
//             callback(compressedFile);
//         };

//         img.src = e.target?.result as string; // Use optional chaining for safety
//     };

//     reader.readAsDataURL(file);
// }

import React, { ChangeEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from "@/hooks/use-toast";

type Props = {};

const ReportComponent = (props: Props) => {
    const { toast } = useToast();
    const [base64Data, setBase64Data] = React.useState<string | null>(null);

    function handelReportSelection(event: ChangeEvent<HTMLInputElement>): void {
        if (!event.target.files) return;

        const file = event.target.files[0];
        if (file) {
            let isValidImage = false;
            let isValidDoc = false;
            const validImages = ['image/jpeg', 'image/jpg', 'image/png'];
            const validDocs = ['application/pdf'];

            if (validImages.includes(file.type)) {
                isValidImage = true;
            }
            if (validDocs.includes(file.type)) {
                isValidDoc = true;
            }
            if (!(isValidImage || isValidDoc)) {
                toast({
                    description: "Filetype Not supported",
                    variant: "destructive"
                });
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                const fileContent = reader.result as string;
                console.log(fileContent); // Log the base64 string
                setBase64Data(fileContent);
            };
            if (isValidDoc) {
                reader.readAsDataURL(file);
            }
            if (isValidImage) {
                compressImage(file, (compressedFile: File) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const fileContent = reader.result as string;
                        console.log(fileContent); // Log the base64 string
                        setBase64Data(fileContent);
                    };
                    reader.readAsDataURL(compressedFile);
                });
            }
        }
    }

    async function extractDetails(): Promise<void> {
        if (!base64Data) {
            toast({
                variant: 'destructive',
                description: "Upload a valid report!",
            });
            return;
        }

        const response = await fetch("api/extractreportgemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                base64: base64Data,
            }),
        });

        if (response.ok) {
            const reportText = await response.text();
            console.log(reportText);

        }

    }

    return (
        <div className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'>
            <fieldset className='relative grid gap-6 rounded-lg border p-4'>
                <legend className='text-lg font-medium'>Report</legend>
                <Input type='file' onChange={handelReportSelection}></Input>
                <Button onClick={extractDetails}>1. Upload File</Button>
                <Label>Report Summary</Label>
                <Textarea placeholder='Extracted data from the report will appear here. Get better recommendations by providing additional patient history and symptoms...' className='min-h-72 resize-none border-0 p-3 shadow-none focus-visible:ring-0'></Textarea>
                <Button variant={'destructive'} className='bg-[#D90013]'>2. Looks Good</Button>
            </fieldset>
        </div>
    );
};

export default ReportComponent;

function compressImage(file: File, callback: (compressedFile: File) => void) {
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();

        img.onload = () => {
            // Create canvas element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                throw new Error('Could not get canvas context');
            }

            // Set canvas dimensions
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0);

            const quality = 0.1; // Compression quality (0.0 to 1.0)

            // Convert canvas to Data URL and then to a compressed file
            const dataURL = canvas.toDataURL('image/jpeg', quality);
            const byteString = atob(dataURL.split(',')[1]);
            const ab = new Uint8Array(byteString.length);

            for (let i = 0; i < byteString.length; i++) {
                ab[i] = byteString.charCodeAt(i);
            }

            // Create a new file from the compressed data
            const compressedFile = new File([ab], file.name, { type: 'image/jpeg' });
            callback(compressedFile);
        };

        img.src = e.target?.result as string; // Use optional chaining for safety
    };

    reader.readAsDataURL(file);
}
