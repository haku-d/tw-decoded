import { Field, Input, Label, Description } from '@/components/ui';
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid';

export default function Page() {
  return (
    <div className="space-y-8">
      <Field hasError>
        <Label>Email</Label>
        <Input className="mt-2 rounded-md" />
        <Description>Please enter your email address</Description>
      </Field>
      <Field>
        <Label>Price</Label>
        <Input
          prefix="$"
          suffix={
            <select name="currency">
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          }
          className="mt-2 rounded-md"
        />
        <Description>Please enter your price</Description>
      </Field>
      <div className="field-set">
        <Label>Card Details</Label>
        <div className="field-group mt-2 -space-y-px space-y-reverse-0">
          <Field>
            <Input
              placeholder="Card number"
              shadow={false}
              className="rounded-none rounded-tl-md rounded-tr-md border-0"
            />
          </Field>
          <div className="flex -space-x-px space-x-reverse-0">
            <Field className="w-1/2 flex-1 min-w-0">
              <Input
                placeholder="MM/YY"
                className="rounded-none rounded-bl-md border-0"
              />
            </Field>
            <Field className="flex-1 min-w-0">
              <Input
                placeholder="CVC"
                className="rounded-none rounded-br-md border-0"
              />
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}
