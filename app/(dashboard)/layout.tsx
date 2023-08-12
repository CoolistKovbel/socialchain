import SideBar from "@/components/sideBar"

const DashboardLayout = async( {children}: {children: React.ReactNode}) => {
    return (
        <div id="DashboardLayout" className="w-full h-screen">
            {/* SideBar */}
            <SideBar />

            {/* RightBar */}
            <div id="MainPanel">
                {children}
            </div>
            
        </div>
    )
}

export default DashboardLayout