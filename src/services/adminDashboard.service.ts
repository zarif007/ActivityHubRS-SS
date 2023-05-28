import { AdminDashboardModel } from "../models/adminDashboard.model";

const getAdminDashboardService = async (query: Object) => {
    const adminDashboard = await AdminDashboardModel.find(query)
    return adminDashboard;
};



// Multiple activity insertion
const updateAdminDashboardService = async (session:any,updateInfo: any) => {
    const result = await AdminDashboardModel.findOneAndUpdate({session}, updateInfo, { new: true });
    return result;
};

const addAdminDashboardService = async (adminDashboard: any) => {
    const result = await AdminDashboardModel.create(adminDashboard);
    return result;
};



export { getAdminDashboardService, updateAdminDashboardService,addAdminDashboardService };
