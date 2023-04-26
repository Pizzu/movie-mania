import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { Button, RadioShowCard } from "~/components/ui";

const ShowSelectionForm = () => {
  const methods = useForm<{
    content: string;
  }>();

  const onSubmit: SubmitHandler<{ content: string }> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-14">
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            <RadioShowCard
              id="one"
              value="one"
              required={true}
              keyInput={"content"}
            />
            <RadioShowCard
              id="two"
              value="two"
              required={true}
              keyInput={"content"}
            />
            <RadioShowCard
              id="three"
              value="three"
              required={true}
              keyInput={"content"}
            />
          </div>
          <Button
            className="w-80 py-4"
            disabled={!methods.formState.isDirty && methods.formState.isValid}
          >
            Reservation
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ShowSelectionForm;
