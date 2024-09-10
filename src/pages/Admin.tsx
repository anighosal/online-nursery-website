import AdminContainer from "@/components/admin/AdminContainer";
import Container from "@/components/ui/Container";

const Management = () => {
  return (
    <Container>
      <h2 className="text-center text-3xl font-semibold my-10 mt-20 pt-10">
        Product & Category management
      </h2>
      <AdminContainer />
    </Container>
  );
};

export default Management;
