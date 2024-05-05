import usePost, { getPostBySlug } from "@/hooks/usePost";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient } from "react-query";

// Mock the getPostBySlug function
jest.mock("./path/to/hooks/usePost", () => ({
  getPostBySlug: jest.fn(),
}));

describe("usePost", () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it("should return a post when slug is provided", async () => {
    const slug = "test-slug";
    const expectedPost = { id: 1, title: "Test Post" };
    getPostBySlug.mockResolvedValueOnce(expectedPost);

    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => usePost(slug), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(expectedPost);
    expect(getPostBySlug).toHaveBeenCalledWith(slug);
  });

  it("should not fetch post when slug is empty", () => {
    const { result } = renderHook(() => usePost(""), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    });

    expect(result.current.isIdle).toBeTruthy();
    expect(getPostBySlug).not.toHaveBeenCalled();
  });
});
