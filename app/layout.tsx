import SideNav from "./ui/dashboard/sidenav"; // './' se start karein, absolute path na likhein

// Path ko './' se start karein


export default function Layout({ children}: {children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
             <SideNav />           
         </div>  
         <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>    
      </div>
     </body>
    </html>
  );
}