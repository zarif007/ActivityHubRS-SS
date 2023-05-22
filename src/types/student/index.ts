export interface StudentInterface {
    _id?: string;
    studentId: string;
    name: string;
    email: string;
    gender: 'Male' | 'Female' | '',
    department: string;
    roomNumber: string;
    semester: string;
    phoneNumber: string;
    bngSection: string;
    engSection?: string;
    __v?: 0,
    createdAt?: string;
    updatedAt?: string;
}