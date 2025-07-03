import { useEffect } from "react";

// Redux (Store)
import {
  setTestsLoading,
  updateTestsFromStore,
} from "../../../store/features/testsSlice";
import { useDispatch, useSelector } from "react-redux";

// Components
import { useParams } from "react-router-dom";
import testsService from "../../../api/services/testsService";

// Components
import TestItem from "../../../components/common/TestItem";
import TestItemSkeleton from "../../../components/skeleton/TestItem";

const Tests = () => {
  const dispatch = useDispatch();
  const { categoryLink } = useParams();
  const { data, isLoading } = useSelector((state) => state.tests);

  const loadTests = () => {
    testsService
      .getTests(categoryLink)
      .then(({ data }) => {
        dispatch(updateTestsFromStore({ name: categoryLink, data }));
      })
      .finally(() => dispatch(setTestsLoading(false)));
  };

  useEffect(() => {
    if (!data[categoryLink]?.length) loadTests();
  }, []);

  // Loading
  if (isLoading) return <TestsSkeleton />;

  // Content
  return (
    <div className="py-8 md:py-10">
      <div className="container">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data[categoryLink]?.map((test, index) => (
            <TestItem
              {...test}
              key={index}
              icon="https://andarov-frontquiz.netlify.app/img/js.svg"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const TestsSkeleton = () => {
  return (
    <div className="py-8 md:py-10">
      <div className="container">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <TestItemSkeleton key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tests;
