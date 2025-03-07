
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { AnimatedTitle } from '@/components/ui/AnimatedText';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { BarChart, LineChart, PieChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Pie, Cell } from 'recharts';
import { Clock, TrendingUp, Users, DollarSign, Activity, ArrowUpRight, BadgePercent } from 'lucide-react';

const data = [
  { name: 'Jan', revenue: 4000, users: 2400, amt: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398, amt: 2210 },
  { name: 'Mar', revenue: 2000, users: 9800, amt: 2290 },
  { name: 'Apr', revenue: 2780, users: 3908, amt: 2000 },
  { name: 'May', revenue: 1890, users: 4800, amt: 2181 },
  { name: 'Jun', revenue: 2390, users: 3800, amt: 2500 },
  { name: 'Jul', revenue: 3490, users: 4300, amt: 2100 },
];

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const StatCard = ({ title, value, icon, change, color }: { title: string; value: string; icon: React.ReactNode; change: string; color: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <ArrowUpRight className="w-3 h-3 mr-1" />
          {change}
        </div>
        <span className="text-gray-500 text-xs ml-2">vs last month</span>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Demo notification
    const timer = setTimeout(() => {
      toast({
        title: "New insight available",
        description: "Your weekly analytics report is ready to view.",
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <PageLayout>
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className={cn(
              "text-3xl font-bold mb-2 opacity-0",
              isVisible ? "animate-fade-in" : ""
            )}>
              Dashboard
            </h1>
            <p className={cn(
              "text-gray-600 opacity-0",
              isVisible ? "animate-fade-in" : ""
            )} style={{ animationDelay: "200ms" }}>
              Welcome back! Here's an overview of your business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className={cn(
              "opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "100ms" }}>
              <StatCard 
                title="Total Users" 
                value="24,532" 
                icon={<Users className="w-5 h-5 text-blue-500" />} 
                change="12.5%" 
                color="bg-blue-50"
              />
            </div>
            
            <div className={cn(
              "opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "200ms" }}>
              <StatCard 
                title="Revenue" 
                value="$86,589" 
                icon={<DollarSign className="w-5 h-5 text-green-500" />} 
                change="8.2%" 
                color="bg-green-50"
              />
            </div>
            
            <div className={cn(
              "opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "300ms" }}>
              <StatCard 
                title="Conversion Rate" 
                value="3.6%" 
                icon={<BadgePercent className="w-5 h-5 text-purple-500" />} 
                change="2.1%" 
                color="bg-purple-50"
              />
            </div>
            
            <div className={cn(
              "opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "400ms" }}>
              <StatCard 
                title="Active Sessions" 
                value="1,429" 
                icon={<Activity className="w-5 h-5 text-orange-500" />} 
                change="5.3%" 
                color="bg-orange-50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className={cn(
              "lg:col-span-2 bg-white rounded-xl shadow-md p-6 opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "500ms" }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Revenue vs Users</h3>
                <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Last 7 months
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="users" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className={cn(
              "bg-white rounded-xl shadow-md p-6 opacity-0",
              isVisible ? "animate-fade-in-up" : ""
            )} style={{ animationDelay: "600ms" }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Device Distribution</h3>
                <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Real-time
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "bg-white rounded-xl shadow-md p-6 opacity-0",
            isVisible ? "animate-fade-in-up" : ""
          )} style={{ animationDelay: "700ms" }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Monthly Performance</h3>
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Up 15%
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                  <Bar dataKey="users" fill="#82ca9d" name="Users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
